test('sleep for 418 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 418));
});