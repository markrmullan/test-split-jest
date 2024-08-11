test('sleep for 708 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 708));
});