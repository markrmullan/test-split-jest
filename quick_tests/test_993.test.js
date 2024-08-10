test('sleep for 481 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 481));
});