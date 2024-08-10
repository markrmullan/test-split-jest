test('sleep for 227 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 227));
});