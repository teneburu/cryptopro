import psycopg2
from psycopg2 import sql
import random
import string
import argparse

def generate_invite_code(length=10):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

def populate_invite_codes(conn, tier, count):
    codes = [(generate_invite_code(), tier) for _ in range(count)]

    with conn.cursor() as cur:
        insert_query = sql.SQL("INSERT INTO invite_codes (code, tier) VALUES (%s, %s)")
        cur.executemany(insert_query, codes)
        conn.commit()

    print(f"{count} {tier} invite codes have been populated")

def main(connection_uri, free, bronze, silver, gold, premium, master, elite):
    conn = psycopg2.connect(connection_uri)

    try:
        tiers = {
            'free': free,
            'bronze': bronze,
            'silver': silver,
            'gold': gold,
            'premium': premium,
            'master': master,
            'elite': elite
        }

        for tier, count in tiers.items():
            if count > 0:
                populate_invite_codes(conn, tier, count)
    finally:
        conn.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Populate invite codes into the database")
    parser.add_argument('--connection-uri', required=True, help='PostgreSQL connection URI')
    parser.add_argument('--free', type=int, default=0, help='Number of free invite codes to generate')
    parser.add_argument('--bronze', type=int, default=0, help='Number of bronze invite codes to generate')
    parser.add_argument('--silver', type=int, default=0, help='Number of silver invite codes to generate')
    parser.add_argument('--gold', type=int, default=0, help='Number of gold invite codes to generate')
    parser.add_argument('--premium', type=int, default=0, help='Number of premium invite codes to generate')
    parser.add_argument('--master', type=int, default=0, help='Number of master invite codes to generate')
    parser.add_argument('--elite', type=int, default=0, help='Number of elite invite codes to generate')

    args = parser.parse_args()
    main(args.connection_uri, args.free, args.bronze, args.silver, args.gold, args.premium, args.master, args.elite)
