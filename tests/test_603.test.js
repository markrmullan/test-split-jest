test('sleep for 933 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 933));
});