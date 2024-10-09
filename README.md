# wcscoreboard

### Overview

The Football World Cup Scoreboard Library is a module that provides simple functionality to manage and display scores for football matches.

Features:

- Start new matches
- Update scores for ongoing matches
- Finish matches
- Get a summary of all ongoing matches, which are sorted by total score

### SOLID concerns

I'm not quite sure that Scoreboard class is strictly following Single Responsibility Principle, but this class has well defined responsibility of managing matches, and this design results in a simple API that is easy to maintain in my opinion. My other attempts at the implementation were resulted in increased complexity of the system with a lot of forced separation of the classes just for the sake of it, so I believe this solution is the optimal due to its simplicity.
