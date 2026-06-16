# backend/services/area_engine.py

area_state = {}

def update_area_data(processed_data):

    zone = processed_data["zone"].upper()

    if zone not in area_state:
        area_state[zone] = {}

    area_state[zone] = processed_data

    return area_state


def get_all_areas():

    return area_state


def get_area(zone):

    return area_state.get(zone.upper(), {})