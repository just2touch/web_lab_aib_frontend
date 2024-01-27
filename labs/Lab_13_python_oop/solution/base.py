from abc import ABCMeta, abstractmethod


class BaseXlsBlock(metaclass=ABCMeta):
    def __init__(self, worksheet, workbook, row, column, data):
        self.worksheet = worksheet
        self.workbook = workbook
        self.row = row
        self.column = column
        self.data = data

    @abstractmethod
    def write_block_header(self):
        pass

    @abstractmethod
    def write_block_data(self):
        pass
    