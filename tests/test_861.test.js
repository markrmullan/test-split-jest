test('sleep for 598 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 598));
});