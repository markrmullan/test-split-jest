test('sleep for 523 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 523));
});