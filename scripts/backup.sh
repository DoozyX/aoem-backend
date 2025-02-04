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
mkdir -p $BACKUP_DIR

DATE=$(date +"%Y%m%d%H%M")
BACKUP_FILE="$BACKUP_DIR/backup_$DATE.sql"

echo "Backup started: $BACKUP_FILE ..."
echo "Database: $PGDATABASE"
echo "User: $PGUSER"

# Create a backup
PGPASSWORD=$PGPASSWORD pg_dump -x --no-owner -h $PGHOST -p $PGPORT -U $PGUSER -d $PGDATABASE -F c -b -v -f "$BACKUP_FILE"

# Check if the backup was successful
if [ $? -eq 0 ]; then
  echo "Backup was successful: $BACKUP_FILE"
else
  echo "Backup failed"
  exit 1
fi

# Optional: Remove backups older than 30 days
find $BACKUP_DIR -type f -name "backup_*.sql" -mtime +30 -exec rm {} \;

echo "Backup completed: $BACKUP_FILE"