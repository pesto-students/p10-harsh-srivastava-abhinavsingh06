// Kadane's Algorithm:

const maxSubArraySum = (A) => {
  let maxEndingHere = A[0];
  let maxSoFar = A[0];

  for (let i = 0; i < A.length; i++) {
    maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
};

// Time complexity: O(N)
// Space complexity O(1)