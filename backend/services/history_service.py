from models import SensorReading


def get_latest_history(
    db,
    limit=50
):

    return (
        db.query(SensorReading)
        .order_by(SensorReading.timestamp.desc())
        .limit(limit)
        .all()
    )


def get_zone_history(
    db,
    zone,
    limit=50
):

    return (
        db.query(SensorReading)
        .filter(SensorReading.zone == zone)
        .order_by(SensorReading.timestamp.desc())
        .limit(limit)
        .all()
    )