test('sleep for 165 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 165));
});