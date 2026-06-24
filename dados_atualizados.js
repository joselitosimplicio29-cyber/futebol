// Dados atualizados da Copa do Mundo 2026 - 24 de junho de 2026
// Fonte: FIFA.com

const FALLBACK_GROUPS_ATUALIZADO = {
  A: [
    {f: '🇲🇽', n: 'México', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 3, gc: 0, sg: 3, cl: 'g'},
    {f: '🇰🇷', n: 'Coreia do Sul', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 2, gc: 2, sg: 0, cl: 'n'},
    {f: '🇨🇿', n: 'Tchéquia', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 2, gc: 3, sg: -1, cl: 'n'},
    {f: '🇿🇦', n: 'África do Sul', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 1, gc: 3, sg: -2, cl: 'n'}
  ],
  B: [
    {f: '🇨🇦', n: 'Canadá', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 7, gc: 1, sg: 6, cl: 'g'},
    {f: '🇨🇭', n: 'Suíça', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 5, gc: 2, sg: 3, cl: 'g'},
    {f: '🇧🇦', n: 'Bósnia e Herzegovina', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 2, gc: 5, sg: -3, cl: 'n'},
    {f: '🇶🇦', n: 'Catar', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 1, gc: 7, sg: -6, cl: 'n'}
  ],
  C: [
    {f: '🇧🇷', n: 'Brasil', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 4, gc: 1, sg: 3, cl: 'g'},
    {f: '🇲🇦', n: 'Marrocos', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 2, gc: 1, sg: 1, cl: 'g'},
    {f: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', n: 'Escócia', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 1, gc: 1, sg: 0, cl: 'n'},
    {f: '🇭🇹', n: 'Haiti', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 0, gc: 4, sg: -4, cl: 'e'}
  ],
  D: [
    {f: '🇺🇸', n: 'EUA', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 6, gc: 1, sg: 5, cl: 'g'},
    {f: '🇦🇺', n: 'Austrália', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 2, gc: 2, sg: 0, cl: 'n'},
    {f: '🇵🇾', n: 'Paraguai', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 2, gc: 4, sg: -2, cl: 'n'},
    {f: '🇹🇷', n: 'Turquia', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 0, gc: 3, sg: -3, cl: 'e'}
  ],
  E: [
    {f: '🇩🇪', n: 'Alemanha', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 9, gc: 2, sg: 7, cl: 'g'},
    {f: '🇨🇮', n: 'Costa do Marfim', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 2, gc: 2, sg: 0, cl: 'n'},
    {f: '🇪🇨', n: 'Equador', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 0, gc: 1, sg: -1, cl: 'n'},
    {f: '🇨🇼', n: 'Curaçau', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 1, gc: 7, sg: -6, cl: 'n'}
  ],
  F: [
    {f: '🇳🇱', n: 'Holanda', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 7, gc: 3, sg: 4, cl: 'g'},
    {f: '🇯🇵', n: 'Japão', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 6, gc: 2, sg: 4, cl: 'g'},
    {f: '🇸🇪', n: 'Suécia', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 6, gc: 6, sg: 0, cl: 'n'},
    {f: '🇹🇳', n: 'Tunísia', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 1, gc: 9, sg: -8, cl: 'e'}
  ],
  G: [
    {f: '🇪🇬', n: 'Egito', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 4, gc: 2, sg: 2, cl: 'g'},
    {f: '🇮🇷', n: 'Irã', pts: 2, j: 2, v: 0, e: 2, d: 0, gp: 2, gc: 2, sg: 0, cl: 'n'},
    {f: '🇧🇪', n: 'Bélgica', pts: 2, j: 2, v: 0, e: 2, d: 0, gp: 1, gc: 1, sg: 0, cl: 'n'},
    {f: '🇳🇿', n: 'Nova Zelândia', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 3, gc: 5, sg: -2, cl: 'n'}
  ],
  H: [
    {f: '🇪🇸', n: 'Espanha', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 4, gc: 0, sg: 4, cl: 'g'},
    {f: '🇺🇾', n: 'Uruguai', pts: 2, j: 2, v: 0, e: 2, d: 0, gp: 3, gc: 3, sg: 0, cl: 'n'},
    {f: '🇨🇻', n: 'Cabo Verde', pts: 2, j: 2, v: 0, e: 2, d: 0, gp: 2, gc: 2, sg: 0, cl: 'n'},
    {f: '🇸🇦', n: 'Arábia Saudita', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 1, gc: 5, sg: -4, cl: 'n'}
  ],
  I: [
    {f: '🇫🇷', n: 'França', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 6, gc: 1, sg: 5, cl: 'g'},
    {f: '🇳🇴', n: 'Noruega', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 7, gc: 3, sg: 4, cl: 'g'},
    {f: '🇸🇳', n: 'Senegal', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 3, gc: 6, sg: -3, cl: 'e'},
    {f: '🇮🇶', n: 'Iraque', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 1, gc: 7, sg: -6, cl: 'e'}
  ],
  J: [
    {f: '🇦🇷', n: 'Argentina', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 5, gc: 0, sg: 5, cl: 'g'},
    {f: '🇦🇹', n: 'Áustria', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 3, gc: 3, sg: 0, cl: 'n'},
    {f: '🇩🇿', n: 'Argélia', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 2, gc: 4, sg: -2, cl: 'n'},
    {f: '🇯🇴', n: 'Jordânia', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 2, gc: 5, sg: -3, cl: 'e'}
  ],
  K: [
    {f: '🇨🇴', n: 'Colômbia', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 4, gc: 1, sg: 3, cl: 'g'},
    {f: '🇵🇹', n: 'Portugal', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 6, gc: 1, sg: 5, cl: 'g'},
    {f: '🇨🇩', n: 'RD do Congo', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 1, gc: 2, sg: -1, cl: 'n'},
    {f: '🇺🇿', n: 'Uzbequistão', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 1, gc: 8, sg: -7, cl: 'e'}
  ],
  L: [
    {f: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', n: 'Inglaterra', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 4, gc: 2, sg: 2, cl: 'g'},
    {f: '🇬🇭', n: 'Gana', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 1, gc: 0, sg: 1, cl: 'g'},
    {f: '🇭🇷', n: 'Croácia', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 3, gc: 4, sg: -1, cl: 'n'},
    {f: '🇵🇦', n: 'Panamá', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 0, gc: 2, sg: -2, cl: 'e'}
  ]
};

const FALLBACK_SCORERS_ATUALIZADO = [
  {name: 'Lionel Messi', team: 'Argentina', flag: '🇦🇷', goals: 5, assists: 2},
  {name: 'Erling Haaland', team: 'Noruega', flag: '🇳🇴', goals: 4, assists: 1},
  {name: 'Kylian Mbappé', team: 'França', flag: '🇫🇷', goals: 4, assists: 2},
  {name: 'Vinícius Júnior', team: 'Brasil', flag: '🇧🇷', goals: 3, assists: 3},
  {name: 'Julián Álvarez', team: 'Argentina', flag: '🇦🇷', goals: 3, assists: 1}
];

const ULTIMOS_RESULTADOS = [
  {data: '24/06', grupo: 'Grupo A', time1: '🇲🇽 México', score1: 1, score2: 0, time2: '🇰🇷 Coreia do Sul', status: 'Encerrado'},
  {data: '24/06', grupo: 'Grupo A', time1: '🇨🇿 Tchéquia', score1: 0, score2: 1, time2: '🇿🇦 África do Sul', status: 'Encerrado'},
  {data: '24/06', grupo: 'Grupo B', time1: '🇨🇭 Suíça', score1: 4, score2: 1, time2: '🇧🇦 Bósnia e Herzegovina', status: 'Encerrado'},
  {data: '24/06', grupo: 'Grupo B', time1: '🇨🇦 Canadá', score1: 6, score2: 0, time2: '🇶🇦 Catar', status: 'Encerrado'},
  {data: '23/06', grupo: 'Grupo J', time1: '🇦🇷 Argentina', score1: 2, score2: 0, time2: '🇦🇹 Áustria', status: 'Encerrado'},
  {data: '23/06', grupo: 'Grupo I', time1: '🇫🇷 França', score1: 3, score2: 0, time2: '🇮🇶 Iraque', status: 'Encerrado'},
  {data: '23/06', grupo: 'Grupo I', time1: '🇳🇴 Noruega', score1: 3, score2: 2, time2: '🇸🇳 Senegal', status: 'Encerrado'}
];

const PROXIMOS_JOGOS = [
  {data: '25/06', hora: '17:00', grupo: 'Grupo E', time1: '🇨🇼 Curaçau', time2: '🇨🇮 Costa do Marfim', local: 'Lincoln Financial Field'},
  {data: '25/06', hora: '17:00', grupo: 'Grupo E', time1: '🇪🇨 Equador', time2: '🇩🇪 Alemanha', local: 'MetLife Stadium'},
  {data: '25/06', hora: '20:00', grupo: 'Grupo F', time1: '🇹🇳 Tunísia', time2: '🇳🇱 Holanda', local: 'Arrowhead Stadium'},
  {data: '25/06', hora: '20:00', grupo: 'Grupo F', time1: '🇯🇵 Japão', time2: '🇸🇪 Suécia', local: 'AT&T Stadium'}
];

const STATS_GERAIS = {
  melhoresAtaques: [
    {time: 'Alemanha', gols: 9},
    {time: 'Noruega', gols: 7},
    {time: 'Canadá', gols: 7},
    {time: 'Holanda', gols: 7},
    {time: 'Portugal', gols: 6}
  ],
  melhoresDefesas: [
    {time: 'México', gols: 0},
    {time: 'Argentina', gols: 0},
    {time: 'Espanha', gols: 0},
    {time: 'Gana', gols: 0},
    {time: 'EUA', gols: 1}
  ]
};
