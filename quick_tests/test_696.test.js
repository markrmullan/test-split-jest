test('sleep for 293 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 293));
});