# adminjs-sample

## migrate

### install golang-migrate

```bash
go install -tags 'postgres' github.com/golang-migrate/migrate/v4/cmd/migrate@latest
```

### create migration file

```bash
migrate create -ext sql -dir db/migrations -seq init
```

※ init は作成したい DDL の名前をつける

### up

```bash
migrate -path db/migrations -database 'postgres://postgres:postgres@localhost:25432/postgres?sslmode=disable' up
```

#### バージョン指定したい場合

```bash
migrate -path db/migrations -database 'postgres://postgres:postgres@localhost:25432/postgres?sslmode=disable' up 1
```

### down

```bash
migrate -path db/migrations -database 'postgres://postgres:postgres@localhost:25432/postgres?sslmode=disable' up
```

#### バージョン指定したい場合

```bash
migrate -path db/migrations -database 'postgres://postgres:postgres@localhost:25432/postgres?sslmode=disable' up 1
```

## prisma

### setup

```bash
npm i prisma
npx prisma init
npm i @adminjs/prisma
```

### generate

```bash
npm run prisma:update
```
