test('sleep for 981 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 981));
});