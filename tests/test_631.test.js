test('sleep for 18997 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 18997));
});