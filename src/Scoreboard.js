const Match = require('./Match');

class Scoreboard {
  constructor() {
    this.liveMatches = [];
  }

  startMatch(homeTeam, awayTeam) {
    const match = new Match(homeTeam, awayTeam);
    this.liveMatches.push(match);
    return match;
  }

  finishMatch(match) {
    this.liveMatches = this.liveMatches.filter(element => element !== match);
    return match;
  }

  updateScore(match, homeScore, awayScore) {
    match.updateScore(homeScore, awayScore);
  }

  getSummary() {
    return [...this.liveMatches].sort((a, b) => {
      const diff = b.getTotalScore() - a.getTotalScore();
      return diff === 0 ? b.kickoffDate - a.kickoffDate : diff;
    });
  }
}

module.exports = Scoreboard;
