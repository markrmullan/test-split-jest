test('sleep for 489 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 489));
});