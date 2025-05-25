import math

def is_prime(num: int) -> bool:
    if num <= 1:
        return False
    if num <= 3:
        return True
    if num % 2 == 0 or num % 3 == 0:
        return False
    i = 5
    # Only check divisors up to sqrt(num)
    while i * i <= num:
        if num % i == 0 or num % (i + 2) == 0:
            return False
        i += 6 # Optimization: primes > 3 are of form 6k +/- 1
    return True

def sum_of_largest_prime_substrings(s: str) -> int:
    n = len(s)
    unique_primes = set()

    # Iterate through all possible substrings
    for i in range(n):
        for j in range(i, n):
            sub_s = s[i:j+1]

            # Handle leading zeros
            if len(sub_s) > 1 and sub_s[0] == '0':
                # Remove leading zeros to get the canonical number string
                # e.g., "007" -> "7"
                # If it's all zeros like "000", this will become "0", which is handled by num <= 1
                cleaned_sub_s = sub_s.lstrip('0')
                if not cleaned_sub_s: # if it was "0" or "000", cleaned_sub_s is empty, treat as 0
                    num = 0
                else:
                    num = int(cleaned_sub_s)
            elif sub_s == '0': # Special case for single '0'
                num = 0
            else:
                num = int(sub_s)

            # Check if the number is prime and add to set
            if is_prime(num):
                unique_primes.add(num)

    # Convert set to list, sort in descending order
    sorted_primes = sorted(list(unique_primes), reverse=True)

    # Sum the top 3 (or fewer if not enough)
    total_sum = 0
    count = 0
    for prime in sorted_primes:
        if count < 3:
            total_sum += prime
            count += 1
        else:
            break
    
    return total_sum
s = input()
print(sum_of_largest_prime_substrings(s))