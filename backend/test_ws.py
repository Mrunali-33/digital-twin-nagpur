import asyncio
import websockets

async def test():

    try:

        async with websockets.connect(
            "ws://127.0.0.1:8000/ws"
        ) as ws:

            print("CONNECTED")

            await asyncio.sleep(5)

    except Exception as e:

        print("ERROR:", e)

asyncio.run(test())