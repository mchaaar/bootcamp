from blackjack.models import Game, Player

def create_game(game_name: str, players: list[str]):
    game = Game(name=game_name)
    game.save()
    for name in players:
        Player.objects.create(name=name, game=game)
    return game

def get_players(game_id):
    game = Game.objects.get(pk=game_id)
    players = game.players.all()
    return players

def get_winners(game_id):
    # should return all winners, closest to 21
    # Can have more than 1 winner
    pass
    
def change_score(player_id, score):
    player = Player.objects.get(pk=player_id)
    player.score = score
    player.save()
    pass
