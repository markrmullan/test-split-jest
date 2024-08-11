test('sleep for 884 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 884));
});