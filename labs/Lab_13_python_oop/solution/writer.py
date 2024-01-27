import xlsxwriter
from blocks import ClientsBlock, CitiesBlock, BankBlock, HeaderBlock


class XlsWriter:
    BLOCK_CLASSES = [
        HeaderBlock,
        ClientsBlock,
        CitiesBlock,
        BankBlock
    ]

    def __init__(self, data):
        self.data = data

    def write_xls(self, output_file):
        workbook = xlsxwriter.Workbook(output_file)
        worksheet = workbook.add_worksheet()
        
        row = 0
        column = 0

        for i in range(0, len(self.BLOCK_CLASSES)):
            worksheet.set_column("A:ZZ", 30)

            block_instance = self.BLOCK_CLASSES[i](worksheet, workbook, row, column, self.data)
            block_instance.write_block_header()
            block_instance.write_block_data()

        workbook.close()
