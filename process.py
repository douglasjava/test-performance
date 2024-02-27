import subprocess

# Executando o script k6 e capturando a saída
output = subprocess.run(['k6', 'run', 'script.js'], capture_output=True, text=True).stdout

# Dividindo a saída em linhas e analisando cada linha
lines = output.split('\n')
for line in lines:
    
    # Analisando cada linha para extrair métricas
    if 'http_req_duration' in line:
        duration_metric = line.split()[1]


# Gerando um relatório com as métricas extraídas
report = f"""
Relatório de Desempenho:
- Duração da solicitação HTTP: {duration_metric}
"""
print(report)