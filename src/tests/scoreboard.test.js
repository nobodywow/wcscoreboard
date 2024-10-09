const Scoreboard = require('../Scoreboard');

describe('scoreboard tests', () => {
  test('should start a match', () => {
    const scoreboard = new Scoreboard();
    const match = scoreboard.startMatch('team1', 'team2');

    expect(scoreboard.liveMatches).toHaveLength(1);
    expect(match.homeScore).toBe(0);
    expect(match.awayScore).toBe(0);
  });

  test('should finish a match', () => {
    const scoreboard = new Scoreboard();
    const match = scoreboard.startMatch('team1', 'team2');
    scoreboard.finishMatch(match);

    expect(scoreboard.liveMatches).toHaveLength(0);
  });

  test('should get summary of ongoing matches', () => {
    const scoreboard = new Scoreboard();
    const match1 = scoreboard.startMatch('Liverpool', 'Arsenal');
    const match2 = scoreboard.startMatch('ManCity', 'Fulham');
    const match3 = scoreboard.startMatch('Wolves', 'Forest');
    const match4 = scoreboard.startMatch('Chelsea', 'Brighton');

    match1.updateScore(5, 0);
    match2.updateScore(1, 1);
    match3.updateScore(1, 4);
    match4.updateScore(2, 2);

    expect(scoreboard.getSummary()).toEqual([match3, match1, match4, match2]);
  });
});
