test('sleep for 21745 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 21745));
});