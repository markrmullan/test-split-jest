test('sleep for 658 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 658));
});