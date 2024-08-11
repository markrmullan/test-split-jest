test('sleep for 997 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 997));
});