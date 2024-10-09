class Match {
  constructor(homeTeam, awayTeam) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = 0;
    this.awayScore = 0;
    this.kickoffDate = new Date();
  }

  updateScore(homeScore, awayScore) {
    this.homeScore = homeScore;
    this.awayScore = awayScore;
  }

  getTotalScore() {
    return this.homeScore + this.awayScore;
  }
}

module.exports = Match;
