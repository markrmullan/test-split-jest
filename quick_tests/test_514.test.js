test('sleep for 853 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 853));
});