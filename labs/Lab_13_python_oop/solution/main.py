from datetime import datetime
import json
import os
from writer import XlsWriter


def load_data(file_path):
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', file_path)

    with open(path, 'r', encoding='utf-8') as file:
        file_data = json.load(file)
    return file_data


if __name__ == '__main__':
    data_clients = load_data('clients.json')
    data_payments = load_data('payments.json')
    data = {'clients': data_clients['clients'], 'payments': data_payments['payments']}

    timestamp = datetime.now().strftime('%Y_%m_%d_%H_%M_%S')
    output_file = f'my_payments_analytics_{timestamp}.xlsx'

    xls_generator = XlsWriter(data)
    xls_generator.write_xls(output_file)

    print(f"Файл XLSX создан: {output_file}")