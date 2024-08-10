test('sleep for 692 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 692));
});