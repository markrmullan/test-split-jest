test('sleep for 982 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 982));
});