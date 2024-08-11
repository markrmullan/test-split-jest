test('sleep for 145 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 145));
});