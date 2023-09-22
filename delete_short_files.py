import os

# Path to the directory containing the files
file_directory = '/home/mem24'

# Iterate through each file in the directory
def check_and_delete_files(directory):
    for filename in os.listdir(directory):
        if filename.endswith('.md'):
            file_path = os.path.join(directory, filename)
            with open(file_path, 'r') as f:
                lines = f.readlines()
            if len(lines) < 10:
                os.remove(file_path)
                print(f'Deleted {filename} due to insufficient lines.')

# Run the function
current_directory = os.getcwd()
if current_directory != file_directory:
    os.chdir(file_directory)
check_and_delete_files(file_directory)