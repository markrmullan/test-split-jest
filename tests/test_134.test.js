test('sleep for 899 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 899));
});