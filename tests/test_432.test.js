test('sleep for 525 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 525));
});