test('sleep for 773 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 773));
});