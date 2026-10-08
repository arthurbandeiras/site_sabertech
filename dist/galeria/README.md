# Estrutura da pasta `galeria`

Cada evento deve ficar em uma pasta própria dentro de `public/galeria/`.

- `public/galeria/<nome-do-evento>/` — imagens do evento (jpg, png, webp, ...)
- `public/galeria/<nome-do-evento>/event.json` — arquivo JSON com metadados do evento

Exemplo de `event.json`:

```
{
  "date": "2026-05-19",
  "description": "Descrição do evento",
  "cover": "foto-de-capa.jpg"
}
```

O servidor expõe a lista de eventos via `/api/galeria`. Se houver imagens na raiz de `public/galeria/`, elas serão retornadas como um evento padrão `event-root`.
