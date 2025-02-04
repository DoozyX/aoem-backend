#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ENV_FILE=$SCRIPT_DIR/../.env

if [ -f $ENV_FILE ]; then
    source $ENV_FILE
else
    echo ".env file not found"
    exit 1
fi

# Variables
PGHOST=$DATABASE_HOST
PGPORT=$DATABASE_PORT
PGUSER=$DATABASE_USERNAME
PGPASSWORD=$DATABASE_PASSWORD
PGDATABASE=$DATABASE_NAME

BACKUP_DIR="$SCRIPT_DIR/../backup"

if [ -z "$1" ]; then
    echo "Usage: $0 <backup_file>"
    exit 1
fi

BACKUP_FILE=$1

if [ ! -f $BACKUP_FILE ]; then
    echo "Backup file not found: $BACKUP_FILE"
    exit 1
fi

echo "Restore started: $BACKUP_FILE ..."
echo "Database: $PGDATABASE"
echo "User: $PGDATABASE"

# Drop the existing database
PGPASSWORD=$PGPASSWORD dropdb -h $PGHOST -p $PGPORT -U $PGUSER $PGDATABASE

# Create a new database
PGPASSWORD=$PGPASSWORD createdb -h $PGHOST -p $PGPORT -U $PGUSER $PGDATABASE

# Restore the backup
PGPASSWORD=$PGPASSWORD pg_restore -x --no-owner -h $PGHOST -p $PGPORT -U $PGUSER -d $PGDATABASE -v "$BACKUP_FILE"

# Check if the restore was successful
if [ $? -eq 0 ]; then
  echo "Restore was successful: $BACKUP_FILE"
else
  echo "Restore failed"
  exit 1
fi

echo "Restore completed: $BACKUP_FILE"