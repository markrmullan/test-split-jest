test('sleep for 234 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 234));
});