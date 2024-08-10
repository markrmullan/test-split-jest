test('sleep for 781 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 781));
});