test('sleep for 978 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 978));
});