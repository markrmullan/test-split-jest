test('sleep for 516 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 516));
});