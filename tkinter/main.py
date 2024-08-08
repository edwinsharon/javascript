import tkinter as tk

# Create the main application window
root = tk.Tk()
root.title("My First Tkinter App")
label=tk.Label(root,text="hai")
label.pack()
Text1=tk.Entry()
Text2=tk.Entry()
button = tk.Button(root, text="Click Me")
Text1.pack()
Text2.pack()
button.pack()
root.mainloop()
