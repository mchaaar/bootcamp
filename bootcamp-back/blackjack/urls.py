from ninja import NinjaAPI, ModelSchema, Schema
from blackjack.models import Game, Player
from blackjack.services import create_game

api = NinjaAPI()

class PlayerSchema(ModelSchema):
    class Meta:
        model = Player
        fields = [
            "id",
            "name",
            "score",
            "game",
        ]

class GameSchema(ModelSchema):
    class Meta:
        model = Game
        fields = [
            "id",
            "name",
            "turn",
            "ended",
        ]
    players: list[PlayerSchema]

class AddGameSchema(Schema):
    game_name: str
    players: list[str]

@api.post("/create_game", response=GameSchema)
def add(request, add_game: AddGameSchema):
    return create_game(add_game.game_name, add_game.players)
