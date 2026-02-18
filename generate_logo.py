import base64

svg = '''<svg width="600" height="150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face {
        font-family: "Mine";
        src: local("Minecraft"), url("https://fonts.cdnfonts.com/s/18260/Minecraft.woff") format("woff");
      }
    </style>
  </defs>
  <rect width="100%" height="100%" fill="black"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Mine, monospace, sans-serif" font-size="70" fill="#AAAAAA" stroke="#000000" stroke-width="4" font-weight="bold">Ahmed Craft</text>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Mine, monospace, sans-serif" font-size="70" fill="#AAAAAA">Ahmed Craft</text>
</svg>'''

b64 = base64.b64encode(svg.encode('utf-8')).decode('utf-8')
with open('logo.txt', 'w') as f:
    f.write(b64)
print("Done")
