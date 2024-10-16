const Match = require('../Match');

describe('match tests', () => {
  test('should update score', () => {
    const match = new Match('team1', 'team2');
    match.updateScore(1, 1);

    expect(match.homeScore).toBe(1);
    expect(match.awayScore).toBe(1);
  });

  test('should get total score', () => {
    const match = new Match('team1', 'team2');
    match.updateScore(1, 1);

    expect(match.getTotalScore()).toBe(2);
  });

  test('should create different date for matches', () => {
    jest.useFakeTimers();
    const match1 = new Match('team1', 'team2');
    jest.advanceTimersByTime(10);
    const match2 = new Match('team3', 'team4');

    expect(match1.kickoffDate).not.toEqual(match2.kickoffDate);
  });
});
