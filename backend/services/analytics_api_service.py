from models import SensorReading


def get_aqi_trend(
    db,
    limit=50
):

    rows = (
        db.query(SensorReading)
        .order_by(
            SensorReading.timestamp.desc()
        )
        .limit(limit)
        .all()
    )

    rows.reverse()

    return [

        {
            "time": row.timestamp,
            "aqi": row.aqi
        }

        for row in rows
    ]


def get_risk_trend(
    db,
    limit=50
):

    rows = (
        db.query(SensorReading)
        .order_by(
            SensorReading.timestamp.desc()
        )
        .limit(limit)
        .all()
    )

    rows.reverse()

    return [

        {
            "time": row.timestamp,
            "risk_score": row.risk_score
        }

        for row in rows
    ]


def get_flood_trend(
    db,
    limit=50
):

    rows = (
        db.query(SensorReading)
        .order_by(
            SensorReading.timestamp.desc()
        )
        .limit(limit)
        .all()
    )

    rows.reverse()

    return [

        {
            "time": row.timestamp,
            "flood_probability":
                row.flood_probability
        }

        for row in rows
    ]


def get_environment_health(
    db,
    limit=50
):

    rows = (
        db.query(SensorReading)
        .order_by(
            SensorReading.timestamp.desc()
        )
        .limit(limit)
        .all()
    )

    rows.reverse()

    return [

        {
            "time": row.timestamp,
            "health_score":
                row.health_score
        }

        for row in rows
    ]


def get_zone_comparison(db):

    neeri = (
        db.query(SensorReading)
        .filter(
            SensorReading.zone == "NEERI"
        )
        .order_by(
            SensorReading.timestamp.desc()
        )
        .first()
    )

    rahate = (
        db.query(SensorReading)
        .filter(
            SensorReading.zone == "RAHATE"
        )
        .order_by(
            SensorReading.timestamp.desc()
        )
        .first()
    )

    return {

        "neeri": {

            "aqi":
                neeri.aqi if neeri else 0,

            "risk_score":
                neeri.risk_score if neeri else 0,

            "health_score":
                neeri.health_score if neeri else 0
        },

        "rahate": {

            "aqi":
                rahate.aqi if rahate else 0,

            "risk_score":
                rahate.risk_score if rahate else 0,

            "health_score":
                rahate.health_score if rahate else 0
        }
    }